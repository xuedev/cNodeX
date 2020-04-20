/**
 * index.state 参数类型
 *
 * @export
 * @interface IndexState
 */
export interface IndexState {
  current:number
}

/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface IndexProps {
  loading: object
  dispatch?: any
  data?: Array<DataInterface>
}

export interface CommonInterface {
  author: AuthorInterface
  content: string
  create_at: string
  id: string
}

export interface DataInterface  extends CommonInterface{
  tab: string
  author_id: string
  title: string
  last_reply_at: string
  reply_count: number
  good: boolean
  top: boolean
  visit_count: number
  replies?: Array<object>
}

export interface AuthorInterface {
  loginname: string
  avatar_url: string
}
//单个回复
export interface ReplayInterface extends CommonInterface{
  is_uped: boolean
  reply_id: string | null
  ups: Array<string>
}
