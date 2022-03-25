import * as React from "react";
import { SSButton } from "./Button";

interface Props {
    authToken: string;
    onComplete: () => void;
}

const Success = (props: Props) => {
    return (
        <>
            Congrats! Your NFT has been submitted to the blockchain. This may take a couple minutes.
            Now we'll walk you through the steps to connect it to Twitter.
            <SSButton onClick={props.onComplete}>{`Connect to Twitter`}</SSButton>
        </>
    );
}

export default Success;
