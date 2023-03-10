import { TRPCError } from "@trpc/server";
import {
	createTRPCRouter,
	protectedProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
	// on mettra ici nos procédures
    getGuilds: protectedProcedure.query(async ({ ctx }) => {
        // récupérer l'account en fonction du user connecté
        const account = await ctx.prisma.account.findFirstOrThrow({
            where: {
                userId: ctx.session.user.id,
                provider: "discord",
            },
        });
    
        // vérification du token
        if(!account.access_token) {
            throw new TRPCError({
                code: "UNAUTHORIZED",
            });
        }
    
        const guilds = await ctx.discord.getUserGuilds(account.access_token);
        return guilds;
    })
});