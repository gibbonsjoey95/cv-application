class Job {
  static nextId = 1;

  constructor(companyName, position, responsibilities, startDate, endDate) {
    this.id = Job.nextId++;
    this.companyName = companyName;
    this.position = position;
    this.responsibilities = responsibilities;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

export { Job };
