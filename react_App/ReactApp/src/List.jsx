

function List() {
    const record = ['React', 'Angular', 'Vue'];
    const ListItems = record.map((item) => <li>{item}</li>)
    return(<ol>{ListItems}</ol>);
}
export default List;