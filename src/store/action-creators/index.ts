import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as PreviewActionCreators from './preview'
import * as InfoActionCreators from './info'
import * as RezumeActionCreators from './rezume'
import * as RepoActionCreators from './repo'
export default {
    ...TodoActionCreators,
    ...UserActionCreators,
    ...PreviewActionCreators,
    ...InfoActionCreators,
    ...RezumeActionCreators,
    ...RepoActionCreators
}
