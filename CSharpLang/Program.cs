using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Collections;

namespace 닷넷_중간고사_대비
{
    public partial class Form1 : Form
    {
        private LinkedList<CMyData> total_lines;
        CMyData data;
        private int x, y;
        private Color CurrentPenColor;
        private Point p;
        private int iCurrentPenWidth;
        private int iCurrentShape;

        public Form1()
        {
            total_lines = new LinkedList<CMyData>();
            CurrentPenColor = Color.Black;
            iCurrentPenWidth = 2;
            InitializeComponent();
        }

        private void typeToolStripMenuItem_Click(object sender, EventArgs e) 
        {
            Form3 dlg = new Form3();
            dlg.DialogPenColor = CurrentPenColor;
            dlg.DialogPenWidth = iCurrentPenWidth;
            if (dlg.ShowDialog() == DialogResult.OK)
            {
                CurrentPenColor = dlg.DialogPenColor;
                iCurrentPenWidth = dlg.DialogPenWidth;
            }
            dlg.Dispose();
        }

        private void Form1_Paint(object sender, PaintEventArgs e)
        {
            SolidBrush b = new SolidBrush(CurrentPenColor);

            foreach (CMyData line in total_lines)
            {
                b = new SolidBrush(line.Color);
                if (line.Shape == 0)
                {
                    e.Graphics.FillRectangle(b, ((Point)line.AR[0]).X, ((Point)line.AR[0]).Y, line.Width, line.Width);
                    e.Graphics.DrawRectangle(new Pen(Color.Black), ((Point)line.AR[0]).X, ((Point)line.AR[0]).Y, line.Width, line.Width);
                }
                else if (line.Shape == 1)
                {
                    e.Graphics.FillEllipse(b, ((Point)line.AR[0]).X, ((Point)line.AR[0]).Y, line.Width, line.Width);
                    e.Graphics.DrawEllipse(new Pen(Color.Black), ((Point)line.AR[0]).X, ((Point)line.AR[0]).Y, line.Width, line.Width);
                }
                else if(line.Shape == 2)
                {
                    
                }
                else
                {
                    for (int i = 1; i < line.AR.Count; i++)
                        e.Graphics.DrawLine(new Pen(line.Color, line.Width), (Point)line.AR[i - 1], (Point)line.AR[i]);
                }
            }
        }

        private void Form1_MouseDown(object sender, MouseEventArgs e)
        {
            if (e.Button == MouseButtons.Left)
            {
                //Color&Width
                data = new CMyData();
                data.Color = CurrentPenColor;
                data.Width = iCurrentPenWidth;
                data.Shape = iCurrentShape;

                p = new Point(e.X, e.Y);
                data.AR.Add(p);

                //Shape
                SolidBrush b = new SolidBrush(CurrentPenColor);
                Graphics g = this.CreateGraphics();
                if (iCurrentShape == 0)
                {
                    g.FillRectangle(b, e.X, e.Y, iCurrentPenWidth, iCurrentPenWidth);
                    g.DrawRectangle(new Pen(Color.Black), e.X, e.Y, iCurrentPenWidth, iCurrentPenWidth);
                }
                if (iCurrentShape == 1)
                {
                    g.FillEllipse(b, e.X, e.Y, iCurrentPenWidth, iCurrentPenWidth);
                    g.DrawEllipse(new Pen(Color.Black), e.X, e.Y, iCurrentPenWidth, iCurrentPenWidth);
                }
            }

        }

        private void Form1_MouseMove(object sender, MouseEventArgs e)
        {
            if (Capture && e.Button == MouseButtons.Left && (iCurrentShape == 3 || iCurrentShape == 2))
            {
                if (iCurrentShape == 3) //자유곡선
                {
                    Graphics G = CreateGraphics();
                    G.DrawLine(new Pen(data.Color, data.Width), p.X, p.Y, e.X, e.Y);
                    p = new Point(e.X, e.Y);
                    data.AR.Add(p);
                    G.Dispose();
                }
                else if (iCurrentShape == 2) //직선
                {
                    Graphics G = CreateGraphics();
                    G.DrawLine(new Pen(data.Color, data.Width), p.X, p.Y, e.X, e.Y);
                    p = new Point(e.X, e.Y);
                    data.AR.Add(p);
                    G.Dispose();
                }
            }
        }

        private void Form1_MouseUp(object sender, MouseEventArgs e)
        {
            total_lines.AddLast(data);
        }

        private void rToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CurrentPenColor = Color.Red;
        }

        private void gToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CurrentPenColor = Color.Green;
        }

        private void bToolStripMenuItem_Click(object sender, EventArgs e)
        {
            CurrentPenColor = Color.Blue;
        }

        private void menuStrip1_MenuActivate(object sender, EventArgs e)
        {
            rToolStripMenuItem.Checked = (CurrentPenColor == Color.Red);
            gToolStripMenuItem.Checked = (CurrentPenColor == Color.Green);
            bToolStripMenuItem.Checked = (CurrentPenColor == Color.Blue);
        }

        private void typeToolStripMenuItem1_Click(object sender, EventArgs e)
        {
            Form2 dlg = new Form2();
            dlg.Shape = iCurrentShape;
            if (dlg.ShowDialog() == DialogResult.OK)
            {
                iCurrentShape = dlg.Shape;
            }
            dlg.Dispose();
        }
        private void typeToolStripMenuItem_MouseDown(object sender, MouseEventArgs e) {}
        private void typeToolStripMenuItem_MouseMove(object sender, MouseEventArgs e) {}
        private void typeToolStripMenuItem_MouseUp(object sender, MouseEventArgs e){}
    }
    class CMyData
    {
        private ArrayList Ar; //선

        public CMyData()  //생성자함수
        {
            Ar = new ArrayList();
        }
        public Color Color
        {
            get;
            set;
        }
        public int Width
        {
            get;
            set;
        }
        public int Shape
        {
            get;
            set;
        }
        public ArrayList AR
        {
            get { return Ar; }
        }
    }
}