import * as chuckSaga from "./chuck/saga";
import * as triviaSaga from "./trivia/saga";

const sagas = {...chuckSaga, ...triviaSaga};

export default sagas;