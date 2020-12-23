import * as core from "./lib/core";
import getToken from "./api/getToken";
import getBalance from "./api/getBalance";
import getDatacenter from "./api/getDatacenter";
import getTariff from "./api/getTariff";
import getOs from "./api/getOs";
import serverGet from "./api/server/get";
import serverStat from "./api/server/stat";
import serverScreenshot from "./api/server/screenshot";

const server = { serverGet, serverStat, serverScreenshot };

export { core, getToken, getBalance, getDatacenter, getTariff, getOs, server };
