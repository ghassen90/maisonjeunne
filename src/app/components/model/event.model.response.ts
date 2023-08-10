export interface EventResponseModel{
    id_event?: any;
    titre?: any;
    description?: any;
    time?: any;
    nameMaisonjeunes?: any;
    userComments?: UserCommentModel[];
    userLikes?: any;
    usercommentsCount?: any;
}

export interface UserCommentModel{
    id_userComment?: any;
    description?: any;
    time?: any;
    nameUser?: any;
}