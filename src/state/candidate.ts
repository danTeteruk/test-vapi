import { makeObservable, observable, action } from 'mobx'

export enum AgreementStatus {
  NONE = 0,
  CLICKED = 1,
  TERMS_LISTENED = 2,
  AGREED = 3
}

export type CandidateType = {
  name: string | undefined
  agreementStatus: AgreementStatus
  setAgreementStatus(status: AgreementStatus): void
}

class Candidate implements CandidateType {
  name: string | undefined = undefined
  agreementStatus: AgreementStatus = AgreementStatus.NONE

  constructor(name?: string) {
    makeObservable(this, {
      name: observable,
      agreementStatus: observable,
      setAgreementStatus: action
    })
    this.name = name
    this.agreementStatus = AgreementStatus.NONE
  }

  setAgreementStatus(status: AgreementStatus) {
    this.agreementStatus = status
  }
}

// Create singleton instance of Candidate as only one candidate at a time is possible, so keep it incapsulated
export default Candidate
