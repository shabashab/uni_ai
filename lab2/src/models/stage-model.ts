export interface Stage {
  message: string;
  type: "buttons" | "name"
  buttons?: {label: string, value: string | boolean | number}[]
}

export interface StageAnswer {
  value: string | boolean | number;
  label?: string;
}