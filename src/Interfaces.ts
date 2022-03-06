export interface AssignedProps
{
    person_name: string, 
    status: string
}
export interface TaskProps
{
    assigned_to:AssignedProps[],
    work_order_id: number, 
    description: string,
    priority: string,
    received_date: Date,
    status: string,
}
export interface DataProps {
  data: TaskProps[];
}
export interface FindButtonProps {
    search:string,
    changeSearch: (text: string) => void;
}
export interface ShowTasksProps {
    data: TaskProps[],
    search:string,
    changeSearch: (text: string) => void;
}
export type DataOrgProps = TaskProps[];

export interface RecordProps
{
    key: number, 
    task:TaskProps
}