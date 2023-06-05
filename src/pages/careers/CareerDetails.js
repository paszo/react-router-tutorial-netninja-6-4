import {useLoaderData, useParams} from "react-router-dom";

const CareerDetails = () => {
    const {id} = useParams();
    const career = useLoaderData();

    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi consectetur consequatur cumque deleniti doloribus esse expedita fugiat laudantium, modi numquam odit omnis quae quos recusandae sit unde ut. Enim!</div>
        </div>
    );
};

export default CareerDetails;

export const careerDetailsLoader = async ({params}) => {
    const {id} = params;

    const res = await fetch('http://localhost:4000/careers/' + id);
    return res.json()

}