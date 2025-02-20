export const migrarBaseDatos = async (db) => {
    const VersionBaseDatos =  1;
    let { user_version : versionActual } = await db.getFirstAsync('PRAGMA user_version');
    if (versionActual >= VersionBaseDatos) {
        return;
    }

    if (versionActual == 0) {
        await db.execAsync(`
            PRAGMA journal_mode = 'wal';
            CREATE TABLE IF NOT EXISTS items (
                id INTEGER PRIMARY KEY NOT NULL,
                done INT,
                value TEXT
            );
        `);
        versionActual =  1;
    }
    await db.execAsync(`PRAGMA user_version = ${VersionBaseDatos}`);
} 

export const agregarItem = async (db,texto) =>{
    if (texto !== '') {
        await db.runAsync(
            'INSERT INTO items (done,value) VALUES (?,?);',
            false,
            texto
        );
    }
}

export const marcarItemCompletado = async ( db, id) => {
    await db.runAsync('UPDATE items SET done = ? WHERE id = ?;',true,id);
}

export const eliminarItem = async (db, id) => {
    await db.runAsync('DETETE FROM items WHERE id = ?;', id);
}
