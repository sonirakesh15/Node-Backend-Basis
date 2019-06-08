'use strict';
module.exports = {
    ok: (res, msg, data) => {
        return res.status(200).json({
            success: true,
            data: data,
            msg: msg
        });
    },
    error: () => {

    },
    unauthorized: () => {

    }
}