// pages/api/createProfile.js
import { DesmosClient, OfflineSignerAdapter, SigningMode } from "@desmoslabs/desmjs";
import { MsgSaveProfile } from "@desmoslabs/desmjs-types/desmos/profiles/v3/msgs_profile";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const rpcEndpoint = "https://rpc.mainnet.desmos.network:443";
            const mnemonic = "three notice vapor card element enhance rather shift tired team nerve dentist fiber tomato mansion mixed mechanic task noise route uphold monster remind phone";
            const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
            const [firstAccount] = await signer.getAccounts();
            const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);

            const profileData = req.body; // Data from request body

            const msg = {
                typeUrl: "/desmos.profiles.v3.MsgSaveProfile",
                value: MsgSaveProfile.fromPartial({
                    dtag: profileData.dtag,
                    nickname: profileData.nickname,
                    bio: profileData.bio,
                    profilePicture: profileData.profilePicture,
                    coverPicture: profileData.coverPicture,
                    creator: firstAccount.address,
                })
            };

            const result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");
            res.status(200).json({ message: 'Profile created', result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end();
    }
}
