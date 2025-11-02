import Avatar from './Avater'
import Info from './Info'

export default function Profile(props) {
  return (
    <div>
        <Avatar {...props} />
        <Info age={props.age}/>
    </div>
  )
}
