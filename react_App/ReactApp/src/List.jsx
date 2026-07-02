import './index.css';

function List(props) {
    const record = props.items;
    const category = props.category;
    const ListItems = record.map((item) => <li key ={item.id}>{item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>)
    
    return(<>
    <h3 className="list-title">{category}</h3>
    <ol className="list-group">{ListItems}</ol>
    </>);
}
export default List;