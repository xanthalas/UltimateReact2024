export default function Stats({items}) {

    if (items.length === 0) {
        return (<p className="stats">You have no items on your list. Add some!</p>);
    }

    const totalItems = items.length;
    const packedItems = items.filter(item => item.packed).length;
    const percentage = Math.round(packedItems / totalItems * 100);
    const itemsLabel = totalItems === 1 ? "item" : "items";

    return <footer className="stats">
        <em>
            {
                percentage === 100
                    ? "You are all packed!"
                    : `You have ${totalItems} ${itemsLabel} on your list, and you already packed ${packedItems} (${percentage}%)`}
        </em>
    </footer>
}