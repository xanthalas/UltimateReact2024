import {useState} from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

export default function App() {
    const [items, setItems] = useState([]);

    return (
        <div className="App">
            <Logo/>
            <Form onAddItem={handleAddItem}/>
            <PackingList
                items={items}
                onDeleteItem={handleDeleteItem}
                onToggleItem={handleToggleItem}
                onClearList={handleClearList}
            />
            <Stats items={items}/>
        </div>
    );

    function handleAddItem(item) {
        setItems(items => [...items, item]);
    }

    function handleDeleteItem(itemId) {
        setItems(items => items.filter(item => item.id !== itemId));
    }

    function handleToggleItem(itemId) {

        setItems(items => items.map(item => item.id === itemId ? {...item, packed: !item.packed} : item));
    }

    function handleClearList() {
        const confirmed = window.confirm("Are you sure you want to clear your list?");

        if(confirmed) {
            setItems([]);
        }
    }
}

