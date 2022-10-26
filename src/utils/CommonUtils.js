class CommonUtils {
  /**
   * @description 时间戳对象生成
   * @returns {{_t: number}}
   */
  static joinTimestamp() {
    const now = new Date().getTime();
    return { _t: now };
  }
}

export { CommonUtils };
