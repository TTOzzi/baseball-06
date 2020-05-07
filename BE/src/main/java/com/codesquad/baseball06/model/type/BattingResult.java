package com.codesquad.baseball06.model.type;

public enum BattingResult {
  STRIKE(1, "스트라이크"),
  BALL(2, "볼"),
  HIT(3, "안타"),
  OUT(4, "아웃"),
  END(5, "아웃, 공수 전환");

  private final int code;
  private final String type;

  BattingResult(int code, String type) {
    this.code = code;
    this.type = type;
  }

  public int getCode() {
    return code;
  }

  public String getType() {
    return type;
  }
}
