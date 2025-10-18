import Button from "@/components/Button";

export default function Dashboard() {

  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <p className="text-gray-700">This is your admin dashboard.</p>

      <Button onClick={handleClick}>Button Test</Button>
    </div>
  );
}
