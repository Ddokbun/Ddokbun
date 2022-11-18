package com.harryporter.ddokbun.domain.survey.repository;

import com.harryporter.ddokbun.domain.product.entity.Item;
import com.harryporter.ddokbun.domain.survey.dto.request.SurveyAnswerRequest;
import com.harryporter.ddokbun.domain.survey.dto.response.SurveyAnswerResponse;
import com.harryporter.ddokbun.domain.survey.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Map;
import java.util.Objects;

public interface SurveyRepository extends JpaRepository<Survey,Integer> {

    @Query("SELECT distinct s FROM Survey s  JOIN FETCH s.surveySelectList")
    List<Survey> findAllWithAll();

    @Query(value = "SELECT  c.item_seq, c.item_name, c.item_en_name, c.item_price, c.item_picture, c.rec_rate\n" +
            "from\n" +
            "(select case \n" +
            "when :#{#paramSurvey.answerList.get(0)}=1 and b.manage_require like '%낮음%' then 1\n" +
            "when :#{#paramSurvey.answerList.get(0)}=2 and b.manage_require like '%보통%' then 1\n" +
            "when :#{#paramSurvey.answerList.get(0)}=3 and b.manage_require like '%필요함%' then 1\n" +
            "else 0\n" +
            "end as first,\n" +
            "case\n" +
            "when :#{#paramSurvey.answerList.get(1)}=1 and b.water_cycle <= 5 then 1\n" +
            "when :#{#paramSurvey.answerList.get(1)}=2 and 5 < b.water_cycle < 10 then 1\n" +
            "when :#{#paramSurvey.answerList.get(1)}=3 and 10 <= b.water_cycle then 1\n" +
            "else 0\n" +
            "end as second,\n" +
            "case \n" +
            "when :#{#paramSurvey.answerList.get(2)}=1 and b.plant_place like \"%발코니 내측 (실내깊이 50~150cm),발코니 창측 (실내깊이 0~50cm)%\" then 1\n" +
            "when :#{#paramSurvey.answerList.get(2)}=2 and b.plant_place like \"%거실 창측 (실내깊이 150~300cm),발코니 내측 (실내깊이 50~150cm)%\" then 1\n" +
            "when :#{#paramSurvey.answerList.get(2)}=3 and b.plant_place like \"%거실 내측 (실내깊이 300~500cm),거실 창측 (실내깊이 150~300cm)%\" then 1\n" +
            "else 0\n" +
            "end as third,\n" +
            "case \n" +
            "when :#{#paramSurvey.answerList.get(3)}=1 and b.rec_rate like \"%집꾸미기%\" then 1\n" +
            "when :#{#paramSurvey.answerList.get(3)}=2 and b.rec_rate like \"%공기정화%\" then 1\n" +
            "when :#{#paramSurvey.answerList.get(3)}=3 and b.rec_rate like \"%공기정화,집꾸미기%\" then 1\n" +
            "else 0\n" +
            "end as fourth, a.item_seq, a.item_name, a.item_en_name, a.item_price, a.item_picture, b.rec_rate\n" +
            "from ddokbun.item a join ddokbun.plant b on a.plant_seq = b.plant_seq) c\n" +
            "order by (c.first + c.second + c.third + c.fourth) desc limit 5;\n", nativeQuery = true)
    List<Map<String, Object>> findSurveyResult(@Param("paramSurvey") SurveyAnswerRequest surveyAnswerRequest);
}
