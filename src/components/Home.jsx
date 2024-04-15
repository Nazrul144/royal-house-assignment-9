import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import Card from "./Card";


const Home = () => {
    const {houses} = useContext(AuthContext);
    console.log(houses)
    return (
        <div>
            <h1>This is home!</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                houses.map(house => <Card key={house.id} house={house}></Card>)
            }
            </div>
        </div>
    );
};

export default Home;