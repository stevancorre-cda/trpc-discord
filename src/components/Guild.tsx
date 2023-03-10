import { FunctionComponent } from "react";

type GuildProps = {
    name: string;
};

const Guild: FunctionComponent<GuildProps> = ({ name }) => <li>- {name}</li>

export default Guild;