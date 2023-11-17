// pages/api/createPost.js
import { DesmosClient, OfflineSignerAdapter, SigningMode } from "@desmoslabs/desmjs";
import { MsgCreatePost } from "@desmoslabs/desmjs-types/desmos/posts/v3/msgs";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const rpcEndpoint = "https://rpc.mainnet.desmos.network:443";
            const mnemonic = "three notice vapor card element enhance rather shift tired team nerve dentist fiber tomato mansion mixed mechanic task noise route uphold monster remind phone";
            const signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);
            const [firstAccount] = await signer.getAccounts();
            const client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);

            const postData = req.body; // Data from request body

            const msg = {
                typeUrl: "/desmos.posts.v3.MsgCreatePost",
                value: MsgCreatePost.fromPartial({
                    text: postData.text,
                    author: firstAccount.address,
                    subspaceId: Long.fromNumber(0),
                    sectionId:0,
                    // Additional fields as per Desmos post requirements can be added here
                })
            };

            const result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");
            res.status(200).json({ message: 'Post created', result });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end();
    }
}
