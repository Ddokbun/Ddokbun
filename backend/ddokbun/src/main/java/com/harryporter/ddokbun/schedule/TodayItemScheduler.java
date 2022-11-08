package com.harryporter.ddokbun.schedule;

import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Slf4j
public class TodayItemScheduler {

    //사용 이유 , JPA 설정 시 그냥 사용 가능
    //JPA하면서 nativeQuery 활성화하여 db 유연성을 꺠트리고 싶지 않음
    //nativeQuery 없이 JPA truncate 못함, delete 보다 truncate가 빠름
    private final JdbcTemplate jdbcTemplate;

    public TodayItemScheduler(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
     //   this.redisTemplate = redisTemplate;
        //서버 켜질 떄는 무조건 실행되게 하자.
        // changeTodayItems();
       // resetHotClick();
    }
    //0초0분 0시  모든일 모든월 모든 요일
    //오늘의 아이템을 셋팅한다.
    @Scheduled(cron = "0 0 0 * * *")
    public void changeTodayItems() {

        jdbcTemplate.execute("truncate table today_item");
        //기존 today_item에 있는 모든 열 삭제

        //아이템의 key만 들고 온다.
        List<Long> itemkeys =  jdbcTemplate.query("SELECT * FROM ddokbun.item ORDER BY RAND() LIMIT 5", (rs, rowNum) ->
                rs.getLong("item_seq")
        );

        //얻어온 아이템 키를 오늘의 아이템 테이블에 넣는다.
        itemkeys.stream().parallel().forEach(
                (itemKey)->{
                    jdbcTemplate.update("INSERT INTO today_item(item_seq) VALUES(?)",new Object[]{itemKey});
                }
        );
    }
//    @Scheduled(cron = "0 0 0 * * *")
//    public void resetHotClick() {
//        try {
//            log.info("rank");
//            redisTemplate.keys("rank").stream().forEach(k -> {
//                log.info(k);
//                redisTemplate.delete(k);
//            });
//            log.info("캐쉬 삭제에 성공했습니다.");
//        }catch (Exception e){
//            log.info("지울 캐쉬가 없습니다.");
//        }
//    }

}
