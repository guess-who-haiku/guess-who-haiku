export const selectCurrentUser = ({ entities, session }) => entities.users[session.userId];

export const selectModal = ({ ui: { modal } }) => modal;

export const selectAllUsers = ({ entities }) => Object.values(entities.users);

export const selectAllAuthors = ({ entities }) => Object.values(entities.authors);

export const selectAllHaikus = ({ entities }) => Object.values(entities.haikus);

export const selectAllHaikusObj = ({ entities }) => entities.haikus;