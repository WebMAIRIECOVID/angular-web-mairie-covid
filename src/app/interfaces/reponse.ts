import { Question } from "./question";

export interface Reponse {
  texte: string;
  auteur: number;
  question: Question;
}