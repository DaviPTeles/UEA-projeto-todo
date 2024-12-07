export interface CreateToDoDto {
    title: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export interface UpdateToDoDto {
    title?: string;
    isCompleted?: boolean;
    isDeleted?: boolean;
}