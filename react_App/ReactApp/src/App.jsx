import List from './List.jsx';

function App() {
    const record = [
        { id: 1, name: 'React', calories: 100 },
        { id: 2, name: 'Angular', calories: 150 },
        { id: 3, name: 'Vue', calories: 120 }
    ];

    const vegetables = [
        { id: 1, name: 'Carrot', calories: 41 },
        { id: 2, name: 'Broccoli', calories: 55 },
        { id: 3, name: 'Spinach', calories: 23 }
    ];
    return (
        <div>
            <List items={record} category="Programming Languages" />
            <List items={vegetables} category="Vegetables" />
        </div>
    );
}

export default App;
