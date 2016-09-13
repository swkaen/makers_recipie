import sqlite3

class DBConnection():
    def __init__(self, db_name):
        self.db_name = db_name

    def db_connect(self):
        try:
            conn = sqlite3.connect(self.db_name)
            return conn
        except ConnectionError:
            print('Connection failed.')

    def publish_cursor(self, conn):
        cur = conn.cursor()
        return cur

    def sql_commit(self, conn):
        try:
            conn.commit()
        except ConnectionRefusedError:
            print('Connection refused.')

    def close_connection(self, conn):
        try:
            conn.close()
        except ConnectionError:
            print('Database did not close.')


    def execute_sql(self, cur, sql, data):
        try:
            cur.execute(sql, data)
        except ConnectionAbortedError:
            print('sql statement did not execute.')


    def save_user(self, usr):
        conn = self.db_connect()
        cur  = self.publish_cursor(conn)
        sql  = 'INSERT INTO user (user_name, email, password) VALUES (?, ?, ?)'
        self.execute_sql(cur, sql, usr)
        self.sql_commit(conn)
        self.close_connection(conn)

    def save_message(self):
        pass

if __name__=="__main__":
    usr = ('test0', 'aaa@bbb.com')
    DBConn = DBConnection('mk_recipie.sqlite3')
    DBConn.save_user(usr)
