package com.harryporter.ddokbun.api;

import com.harryporter.ddokbun.api.response.ResponseFrame;
import com.harryporter.ddokbun.domain.plant.dto.request.RegisterPotRequest;
import com.harryporter.ddokbun.domain.plant.dto.response.RegisterPotResponse;
import com.harryporter.ddokbun.domain.plant.service.PotService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/pot")
@RestController
@RequiredArgsConstructor
public class PotController {
    private final PotService potService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> registerPot(@RequestBody RegisterPotRequest registerPotRequest) {
        RegisterPotResponse registerPotResponse = potService.registerPot(registerPotRequest);

        ResponseFrame<?> responseFrame = ResponseFrame.ofOKResponse("식물 등록에 성공했습니다.",registerPotResponse);
        return new ResponseEntity<>(responseFrame, HttpStatus.OK);
    }

    @RequestMapping(value = "/{potSeq}", method = RequestMethod.DELETE)
    public ResponseEntity<?> unregisterPot() {
        return null;
    }
}
