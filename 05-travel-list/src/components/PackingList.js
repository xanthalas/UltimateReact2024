import {useState} from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, onClearList}) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;

    switch (sortBy) {
        case "description":
            sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
            break;
        case "packed":
            sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
            break;
        default:
            sortedItems = items;
            break;
    }

    return (
        <div className="list">
            <ul>
                {sortedItems.map(
                    (item) => (
                        <Item
                            key={item.id}
                            item={item}
                            onDeleteItem={onDeleteItem}
                            onToggleItem={onToggleItem}
                        />
                    ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value='input'>Sort by input order</option>
                    <option value='description'>Sort by description</option>
                    <option value='packed'>Sort by packed status</option>
                </select>
            </div>
            <button onClick={onClearList}>Clear list</button>
        </div>);
}