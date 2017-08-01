const initialState = {
    loading: true,
    error: false,
    issuesDataList: []
}

const LOAD_ISSUES = 'LOAN_ISSUES'
const LOAD_ISSUES_SUCCESS  = 'LOAD_ISSUES_SUCCESS'
const LOAD_ISSUES_ERROR  = 'LOAD_ISSUES_ERROR'
// action creator
export function loadIssues() {
    return {
        types:[LOAN_ISSUES,LOAD_ISSUES_SUCCESS,LOAD_ISSUES_ERROR],
        url: '../../../data/issues.json'
    }
}

function issuesList(state = initialState, action) {
    switch(action.type){
        case LOAN_ISSUES: {
            return{
                ...state,
                loading: true,
                error: false,
            }
        }
        case LOAD_ISSUES_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                issuesDataList: action.payload.issuesDataList
            }
        }
        case LOAD_ISSUES_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        default:
            return state
    }
}
export default issuesList
