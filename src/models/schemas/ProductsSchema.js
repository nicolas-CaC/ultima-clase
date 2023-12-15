import { INTEGER, STRING } from "sequelize";
import { MySQL } from "../../config/connections/mysql.js";
import { Postgres } from "../../config/connections/postgres.js";


export class ProductsSchema {

    constructor() {

        this.schema = {
            id: { type: INTEGER, allowNull: false, primaryKey: true },
            nombre: { type: STRING },
            precio: { type: INTEGER }
        };

        this.connection = this.createConnection();

        this.config = {
            sequelize: this.connection.sequelize,
            modelName: 'productos',
            timestamps: false
        };

    }

    createConnection = () => {

        if (process.argv[2] === 'mysql')
            return new MySQL();

        if (process.argv[2] === 'postgres')
            return new Postgres();
    }
}
