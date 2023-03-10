import { FunctionComponent } from "react";
import { api } from "~/utils/api";
import Guild from "./Guild";

const GuildsList: FunctionComponent = () => {
    const { data: guilds, error: guildsErrors, isLoading: guildsLoading } =
        api.user.getGuilds.useQuery();

    return (
        <>
            {guildsLoading ? <p>Chargement des guilds</p> : (
                guildsErrors ? (
                    <p className="text-red-500">{JSON.stringify(guildsErrors)}</p>
                ) : (
                    <ul className="text-white">
                        {guilds.map(x => <Guild key={x.id} name={x.name} />)}
                    </ul>
                )
            )}
        </>
    )
}

export default GuildsList;