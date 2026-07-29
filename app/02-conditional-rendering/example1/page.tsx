import FriendDetails from "@/app/components/friends-details/friends-details";
import { friendsData } from "@/app/data/friends-data";



export default function ConditionalExample1() {

    return (
         <>
            {friendsData.map((friend) => (
                <FriendDetails key={friend.id} name={friend.name} status={friend.status}></FriendDetails>
            ))}
        </>
    )
}