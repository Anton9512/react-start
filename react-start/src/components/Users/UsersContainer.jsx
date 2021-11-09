import Users from './Users'
import { connect } from 'react-redux'
import { followActionCreator, setCurrentPageActionCreator, setTotalCountActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../redux/users-reducer";


const mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageActionCreator(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setTotalCountActionCreator(totalCount))
      },
   }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)