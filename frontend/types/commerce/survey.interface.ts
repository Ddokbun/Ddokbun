// @flow
export type ISurvey = {
  surveySeq: number;
  surveyContent: string;
};
export type ISurveyItem = {
  survey: ISurvey;
  surveySelectList: ISurveySelectListItem[];
};
export type ISurveySelectListItem = {
  surveySelectSeq: number;
  surveySelectContent: string;
  surveySelectNumber: number;
};
