import { Avatar } from "./Avatar";
import { Bio } from "./Bio";
import { CardContainer } from "./CardContainer";
import { Name } from "./Name";

interface ProfileCardProps {
    name: string;
    bio: string;
    imageUrl: string;
}

export function ProfileCard({ name, bio, imageUrl }: ProfileCardProps) {
    return (
        <>
            <CardContainer>
                <Avatar src={imageUrl} alt="Avatar" />
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
            </CardContainer>

        </>
    )
}