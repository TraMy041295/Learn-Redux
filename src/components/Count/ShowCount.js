import { useSelector } from "react-redux"
import { selectCount } from "../../redux/selector"


function ShowCount(props) {
 
    const count1 = useSelector(selectCount(1)) 
    const count2 = useSelector(selectCount(2)) 

    return (<>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Count1</th>
                    <th scope="col">Count2</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{count1}</td>
                    <td>{count2}</td>
                </tr>
            </tbody>
        </table>
    </>)
}

export default ShowCount