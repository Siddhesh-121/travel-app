export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your Packing List</em>
      </p>
    );
  }
  const count = items.length;
  const packedCount = items.filter((item) => item.packed).length;
  const percent = Math.round((packedCount / count) * 100);

  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You are Ready to Take off ✈️"
          : `You have ${count} items on the List and you have already packed
            ${packedCount} items (${percent}%).`}
      </em>
    </footer>
  );
}
