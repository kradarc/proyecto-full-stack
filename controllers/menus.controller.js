const {
    menusIndexDB,
    menusCreateDB,
    menusDeleteDB,
    menusUpdateDB,
} = require("../database/menus.db");

const menusIndex = async (req, res) => {
    const user_id = req.userID;
    const response = await menusIndexDB(user_id);
    if (!response.ok) {
        return res.status(500).json({ ok: false, msg: response.msg });
    }
    return res.json({ ok: true, data: response.datas });
};

const menusCreate = async (req, res) => {
    const { name, url } = req.body;
    const user_id = req.userID;
    const response = await menusCreateDB({ name, url, user_id });
    if (!response.ok) {
        return res.status(500).json({ ok: false, msg: response.msg });
    }
    return res.json({ ok: true, data: response.datas });
};

const menusDelete = async (req, res) => {
    const { id } = req.params;
    const user_id = req.userID;
    const response = await menusDeleteDB({ id, user_id });
    if (!response.ok) {
        return res.status(500).json({ ok: false, msg: response.msg });
    }
    return res.json({ ok: true, data: response.datas });
};

const menusUpdate = async (req, res) => {
    const { id } = req.params;
    const { name, url } = req.body;
    const user_id = req.userID;
    const response = await menusUpdateDB({ id, name, url, user_id });
    if (!response.ok) {
        return res.status(500).json({ ok: false, msg: response.msg });
    }
    return res.json({ ok: true, data: response.datas });
};

module.exports = {
    menusIndex,
    menusCreate,
    menusDelete,
    menusUpdate,
};
