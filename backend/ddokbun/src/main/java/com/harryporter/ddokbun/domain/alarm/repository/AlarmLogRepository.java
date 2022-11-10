package com.harryporter.ddokbun.domain.alarm.repository;

import com.harryporter.ddokbun.domain.alarm.entity.AlarmLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlarmLogRepository  extends JpaRepository<AlarmLog,Long> {
}
