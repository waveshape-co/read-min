class ReadMin {
  constructor(textContentClass, textElementClass, timeOption) {
    this.textContent = document.querySelector(`.${textContentClass}`);
    this.textElement = document.querySelector(`.${textElementClass}`);
    this.timeOption = timeOption;
    this.totalWords = this.getTotalWords();
  }

  getTotalWords() {
    const totalWords = this.textContent.textContent
      .split(/\s+/)
      .filter((word) => word.length > 0).length;

    return totalWords;
  }

  getTime() {
    const wordsPerMinute = 240;

    switch (this.timeOption) {
      case "min":
        return Math.round(this.totalWords / wordsPerMinute);
      case "sec":
        return this.totalWords / wordsPerMinute;
      default:
        return Math.round(this.totalWords / wordsPerMinute);
    }
  }

  init() {
    this.textElement.textContent = this.getTime();
  }
}
