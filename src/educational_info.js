class EducationalInfo {
  static nextId = 1;

  constructor(school, titleOfStudy, startDate, endDate) {
    this.id = EducationalInfo.nextId++;
    this.school = school;
    this.titleOfStudy = titleOfStudy;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export { EducationalInfo };
