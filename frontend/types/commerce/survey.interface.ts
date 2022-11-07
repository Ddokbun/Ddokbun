// @flow
export type ISurvey = {};
export type ISurveyItem = {
  survey: ISurvey;
  surveySelectList: ISurveySelectListItem[];
};
export type ISurveySelectListItem = {
  surveySelectSeq: number;
  surveySelectContent: string;
  surveySelectNumber: number;
};
