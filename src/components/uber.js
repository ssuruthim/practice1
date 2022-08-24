
import briyani from './imagey/chickenbriyani.jpg';
import mutton from './imagey/mutton.jpg';

function Uber() {
    const food = [{
        name: "chicken briyani",
        time: "30min",
        distance: "15km",
        rate: "₹200 for one"
    },
    {
        name: "mutton briyani",
        time: "30min",
        distance: "15km",
        rate: "₹250 for one"
    },{
    name: "beef briyani",
    time: "30min",
    distance: "15km",
    rate: "₹230 for one"}]

    return (
        <div>
            <div className="fooditems">
                <div className="items">



                    <img src={briyani} width={"200"} height={"200"} />

                    <div class="flex">
                        <p>{food[0].name}</p>
                        <p>{food[0].time}</p>
                        <p>{food[0].distance}</p>
                        <p>{food[0].rate}</p>
                    </div>
                </div>
<br/>
                <div className="items">

                    <img src={mutton} width={"200"} height={"200"} />

                    <div class="flex">
                        <p>{food[1].name}</p>
                        <p>{food[1].time}</p>
                        <p>{food[1].distance}</p>
                        <p>{food[1].rate}</p></div>

                </div>

            </div >
        </div>

    )
}

export default Uber;