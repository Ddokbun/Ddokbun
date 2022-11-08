package com.harrypoter.ddokbun_consumer.env.data;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.harrypoter.ddokbun_consumer.env.data.entity.ConsumeLog;
import com.harrypoter.ddokbun_consumer.env.data.entity.Pot;
import com.harrypoter.ddokbun_consumer.env.data.entity.PotLog;
import com.harrypoter.ddokbun_consumer.env.data.repository.PotLogRepository;
import com.harrypoter.ddokbun_consumer.env.data.repository.PotRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.CallableStatementCreator;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.stereotype.Service;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import java.time.Instant;
import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.TimeZone;

@Service
@RequiredArgsConstructor
@Slf4j
public class EnvDataService {
    private final int MAX_COUNT = 20000;
    private final PotLogRepository potLogRepository;
    private final PotRepository potRepository;

    private final ObjectMapper objectMapper;

    @PersistenceContext
    //쓰레드 세이프하게 만들어줌
    private final EntityManager em ;

    private final JdbcTemplate jdt;
    @Transactional
    public void saveEnvData(String in,long ts)  {


        LocalDateTime triggerTime =
                LocalDateTime.ofInstant(Instant.ofEpochMilli(ts),
                        TimeZone.getDefault().toZoneId());
        EnvDto envDto = null;
        try{

            if(objectMapper == null){
                log.warn("mapper is not load");
            }
            envDto = objectMapper.readValue(in,EnvDto.class);
            System.out.println(envDto);

            System.out.println(triggerTime);
            envDto.setTime(triggerTime);
        }
        catch(Exception e){
            e.printStackTrace();
            System.out.println(e.getMessage());
            writeLog(String.format("가져온 메세지 등록에 실패하였습니다.::reason : Json 포맷 에러"));
            return;
        }

        //업데이트하기 -> 화분테이블
        Optional<Pot> opPot =  potRepository.findByPotSerial(envDto.getPotSid());
        //메세지에 해당하는 화분을 못 찾을 경우
        if(opPot.isEmpty()){

            writeLog(String.format("가져온 메세지 등록에 실패하였습니다.::reason : 화분 못 찾음 :: data : %s",envDto.toString()));

            return;
        }
        Pot pot = opPot.get();
        pot.updateBy(envDto);


        if(envDto.getSimple() != 1){
            PotLog potLog = PotLog.of(envDto);
            potLogRepository.save(potLog);
        }
        //로그 남기기

        writeLog(String.format("저장완료 :: data : %s",envDto));

    }


    //로그 남기는 트랜잭션이 기존 트랜잭션에 영향을 주면 안될 것
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    private void writeLog(String content){
        log.info("{}",content);
        ConsumeLog consumeLog = ConsumeLog.of(content);
        em.persist(consumeLog);

        TypedQuery<Long> wrapCount =  em.createQuery("SELECT COUNT(*) FROM ConsumeLog",Long.class);
        int count =wrapCount.getSingleResult().intValue();


        if(count >= MAX_COUNT){
            List<SqlParameter> parameters = Arrays.asList(new SqlParameter(Types.INTEGER));
            jdt.call(new CallableStatementCreator() {
                @Override
                public CallableStatement createCallableStatement(Connection con) throws SQLException {
                    CallableStatement cs = con.prepareCall("{call consume_log_table_reduce(?)}");
                    cs.setInt(1, MAX_COUNT);
                    return cs;
                }
            },parameters);

            jdt.query("call `consume_log_table_reduce`(?)",rs -> {

            });
        }
    }
}
