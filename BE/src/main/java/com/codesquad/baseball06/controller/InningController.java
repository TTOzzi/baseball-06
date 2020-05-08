package com.codesquad.baseball06.controller;

import com.codesquad.baseball06.dto.ApiResponse;
import com.codesquad.baseball06.model.entity.Batter;
import com.codesquad.baseball06.model.entity.HalfInning;
import com.codesquad.baseball06.model.entity.Pitcher;
import com.codesquad.baseball06.model.type.InningType;
import com.codesquad.baseball06.service.InningService;
import io.swagger.annotations.Api;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Api(tags = "prod")
@RequestMapping("/api")
public class InningController {

  private static final Logger log = LoggerFactory.getLogger(InningController.class);
  private final InningService inningService;

  public InningController(InningService inningService) {
    this.inningService = inningService;
  }

  @GetMapping("/dowork")
  public ApiResponse doWork() {
    HalfInning halfInning = HalfInning.create(5L, 1, 1, InningType.EARLY, 2, 1, 2);
    Pitcher pitcher = Pitcher.create(1L, "김투수");
    Batter batter = Batter.create(2L, "홍타자", 0.222);

    return ApiResponse.ok(inningService.doWork(halfInning, pitcher, batter));
  }
}
