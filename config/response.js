'use strict';
module.exports = {
    ok: (res,data) => {
        return res.status(200).json({
            success: true,
            data:data
        });
    },
    error: () => {

    },
    unauthorized: () => {

    }
}